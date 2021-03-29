package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
)

var echo_ *echo.Echo = nil

func main() {
	Connection().GetConn()
	echo_ = echo.New()
	CarRoutes()
	echo_.Logger.SetLevel(log.DEBUG)
	echo_.Logger.Fatal(echo_.Start(":1234"))
}