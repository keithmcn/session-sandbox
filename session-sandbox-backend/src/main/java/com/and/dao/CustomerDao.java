package com.and.dao;

import com.and.model.Contract;
import com.and.model.Customer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class CustomerDao {

    private List<Customer> customers = new ArrayList<>();

    public CustomerDao(){
        customers.add(new Customer("abc123", "Joe", "Blogs", new Contract()));
        customers.add(new Customer("def321", "Mary", "Contrary", new Contract()));
        customers.add(new Customer("xyz789", "Father", "Christmas", new Contract()));
        customers.add(new Customer("zyx987", "Bugs", "Bunny", new Contract()));
    }

    public List<Customer> getAll() {
        return customers;
    }

    public void update(String customerId, Contract contract) {
        Optional<Customer> customer = customers.stream().filter(c -> c.getId().equals(customerId)).findFirst();
        customer.ifPresent(value -> value.setContract(contract));
    }

    public Customer find(String customerId) throws CustomerNotFoundException {
        Optional<Customer> customer = customers.stream().filter(c -> c.getId().equals(customerId)).findFirst();
        return customer.orElseThrow(() -> new CustomerNotFoundException("Could not find customer with ID: " + customerId));
    }
}
