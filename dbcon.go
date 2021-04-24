package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
)

type DbCon struct{
	db *sql.DB
}

var dbName string = "./database.db"

var instance *DbCon = nil

func Connection() *DbCon {
	if instance == nil {
		instance = &DbCon{}

		instance.CreateDB()
		instance.GetConn()
		instance.CreateCarTable()
	}else{
		log.Fatal("fatal")
	}
	return instance
}

func (conn *DbCon) GetConn(){
	db, err := sql.Open("sqlite3", "./" + dbName)
	if err != nil {
		log.Fatal(err.Error())
	}
	instance.db = db;
}

func (conn *DbCon) CreateDB(){
	_, err := os.Stat(dbName)
	if os.IsNotExist(err) {
		file, err := os.Create(dbName)
		if err != nil {
			log.Fatal(err.Error())
		}
		file.Close()
		log.Println("database.db created")
	}else{
		log.Println("database.db exist")
	}
}

func (conn *DbCon) RemoveDB() {
	os.Remove(dbName)
	log.Println("Remove " + dbName)
}

func (conn *DbCon) CreateCarTable(){
	tb := `CREATE TABLE car (
		"idCar" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
		"mark" TEXT,
		"name" TEXT,
		"moc" integer
	);`

	statement, err := conn.db.Prepare(tb)
	if err != nil {
		log.Println("Table car exist")
	}else {
		log.Println("Create car table")
		statement.Exec()
		statement.Close()
	}
	
}

func (conn *DbCon) Query(query string) ( *sql.Rows, error) {
	statement, err := conn.db.Prepare(query)
	if err != nil {
		log.Fatalln(err.Error())
		return nil, err
	}
	defer statement.Close()

	data, err := statement.Query()
	if err != nil {
		log.Fatalln(err.Error())
		return nil, err
	}
	
	return data, nil
}

func (conn *DbCon) GetLastId() int{
	var id int
	conn.db.QueryRow("select MAX(idCar) as id from car").Scan(&id)
	return id
}

func (conn *DbCon) Close() error{
	log.Println("Disconnected")
	return conn.db.Close()
}