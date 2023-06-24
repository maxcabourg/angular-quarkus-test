package org.acme.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import org.acme.dto.CreateUpdateTodoDto;
import org.acme.persistence.entities.Todo;
import org.acme.services.TodoService;

import java.util.List;

@Path("/todos")
public class TodoController {
    @Inject
    TodoService todoService;

    @GET
    public List<Todo> getTodos() {
        return todoService.getTodos();
    }

    @POST
    public Todo createTodo(CreateUpdateTodoDto body) {
        return todoService.createTodo(body.getTitle());
    }

    @PUT
    @Path("/{id}/toggle")
    public Todo toggleTodo(long id) {
        return todoService.toggleTodo(id);
    }

    @DELETE
    @Path("/{id}")
    public void deleteTodo(long id) {
        todoService.deleteTodo(id);
    }
}
