import Fluent
import Vapor

struct LibraryController: RouteCollection {

   func boot(routes: RoutesBuilder) throws {
        let libraries = routes.grouped("libraries")
        libraries.get(use: listAll)
        libraries.post(use: create)
        libraries.group(":libraryID") { Library in
            Library.delete(use: delete)
        }
    }

    func create(req: Request) throws -> EventLoopFuture<Library> {
        let library = try req.content.decode(Library.self)
        return library.save(on: req.db).map { library }
    }

    func delete(req: Request) throws -> EventLoopFuture<HTTPStatus> {
        return Library.find(req.parameters.get("libraryID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .transform(to: .ok)
    }

    func listAll(req: Request) throws -> EventLoopFuture<View> {
        let librariesList = Library.query(on: req.db).all()
        return librariesList.flatMap { libraries in
          print(libraries)
          let tmp = ["librariesList": libraries]
          return req.view.render("libraries", tmp)
        }
      }

}