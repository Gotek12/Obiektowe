package main

func CarRoutes(){
	echo_.GET("/", getHello)
	echo_.POST("/cars", saveCar)
	echo_.GET("/cars", getAllCars)
	echo_.GET("/cars/:id", getCar)
	echo_.PUT("/cars/:id", updateCar)
	echo_.DELETE("/cars/:id", deleteCar)
}