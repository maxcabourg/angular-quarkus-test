package org.acme.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.acme.persistence.entities.Todo;

import java.util.List;

@ApplicationScoped
public class TodoService {

    public List<Todo> getTodos() {
        return Todo.listAll();
    }

    @Transactional
    public Todo createTodo(String title) {
        Todo todo = new Todo();
        todo.setTitle(title);
        todo.setIsCompleted(false);
        todo.persistAndFlush();
        return todo;
    }

    @Transactional
    public void deleteTodo(long id) {
        Todo.deleteById(id);
    }

    @Transactional
    public Todo toggleTodo(long id) {
        Todo todo = Todo.findById(id);
        todo.setIsCompleted(!todo.getIsCompleted());
        todo.persistAndFlush();
        return todo;
    }
}
