package main

func CarRoutes(){
	echo_.GET("/", getHello)
	echo_.POST("/cars", saveCar)
	echo_.GET("/cars", getAllCars)
	var endpointId string = "/cars/:id"
	echo_.GET(endpointId, getCar)
	echo_.PUT(endpointId, updateCar)
	echo_.DELETE(endpointId, deleteCar)
}