package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"log"
	"strconv"
	"fmt"
)

var notFound string = "404 Not found"

func getHello(c echo.Context) error {
	echo_.Logger.Info("hello")
	return c.String(http.StatusOK, "Hello, World!")
}

func getAllCars(c echo.Context) error {
	cars := takeCars(-1)
	if cars == nil {
		return echo.NewHTTPError(http.StatusNotFound, notFound)
	}

	return c.JSON(http.StatusOK, cars)
}

func getCar(c echo.Context) error {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)

	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, err.Error())
	}
	
	car := takeCars(id)
	if car == nil {
		return echo.NewHTTPError(http.StatusNotFound, notFound)
	}

  	return c.JSON(http.StatusOK, car[0])
}

func updateCar(c echo.Context) error {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, notFound)
	}
	what := c.QueryParam("what")
	nowy := c.QueryParam("nowy")
	updated := update(id, what, nowy)
	return c.JSON(http.StatusOK, updated)
}

func deleteCar(c echo.Context) error {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)
	tmp := del(id)
	return c.JSON(202, tmp)
}

func saveCar(c echo.Context) error{
	mark := c.QueryParam("mark")
	name := c.QueryParam("name")
	moc, _ := strconv.Atoi(c.QueryParam("moc"))
	tmp := insert(mark, name, moc)
	return c.JSON(201, tmp)
}

func takeCars(id int64) []*Car{
	var query string
	var arr []*Car

	if id == -1 {
		query = fmt.Sprintf("SELECT * FROM car")
	}else {
		query = fmt.Sprintf("SELECT * FROM car WHERE idCar=%v LIMIT 1", id)
	}

	data, err := instance.Query(query)
	if err != nil {
		log.Fatal(err)
	}

	for data.Next() {
		c := new(Car)
		data.Scan(&c.Id, &c.Mark, &c.Name, &c.Moc)
		arr = append(arr, c)
	}
	echo_.Logger.Info(arr)

	return arr
}

func insert(mark string, name string, moc int) *Car{
	query := fmt.Sprintf("INSERT INTO car(mark, name, moc) VALUES ('%v', '%v', '%v')", mark, name, moc)
	data, err := instance.Query(query)
	if err != nil {
		echo_.Logger.Info("error")
		return nil
	}
	
	data.Next()

	return &Car{Id:instance.GetLastId(), Mark:mark, Name:name, Moc:moc}
}

func update(id int64, what string, nowy string) *Car{
	query := fmt.Sprintf("UPDATE car SET %v='%v' WHERE idCar=%v", what, nowy, id)
	data, _ := instance.Query(query)
	data.Next()

	return takeCars(id)[0]
}

func del(id int64) *Car{
	del := fmt.Sprintf("DELETE FROM car WHERE idCar=%v", id)
	data, _ := instance.Query(del)
	delCar := takeCars(id)[0]
	data.Next()
	return delCar
}