package com.and.rest;

import com.and.dao.CustomerDao;
import com.and.dao.CustomerNotFoundException;
import com.and.model.Customer;
import com.and.model.SessionModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class SpringBootSessionController {

    private CustomerDao dao = new CustomerDao();

    @GetMapping("/")
    public String index(Model model, HttpSession session) {
        String currentCustomerName = getCurrentCustomerName(session);

        model.addAttribute("customerName", currentCustomerName);

        model.addAttribute("customers", dao.getAll());
        return "index";
    }

    @PostMapping("/selectCustomer")
    public String selectCustomer(@RequestParam("customerId") String customerId, HttpServletRequest request) {
        SessionModel model = new SessionModel();
        model.setCustomerId(customerId);
        request.getSession().setAttribute("CUSTOMER_ID", model);
        return "redirect:/customer_details";
    }

    @GetMapping("/customer_details")
    public String home(Model model, HttpSession session) {
        SessionModel sessionModel = (SessionModel) session.getAttribute("CUSTOMER_ID");

        try {
            Customer customer = dao.find(sessionModel.getCustomerId());
            model.addAttribute("customer", customer);
            return "customer_details";
        } catch (CustomerNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping("/invalidate/session")
    public String destroySession(HttpServletRequest request) {
        //invalidate the session , this will clear the data from configured database (Mysql/redis/hazelcast)
        request.getSession().removeAttribute("CUSTOMER_ID");
        return "redirect:/";
    }

    private String getCurrentCustomerName(HttpSession session) {
        String currentCustomerName = "No Customer Selected";
        if(session.getAttribute("CUSTOMER_ID") != null){
            SessionModel sessionModel = (SessionModel) session.getAttribute("CUSTOMER_ID");
            String id = sessionModel.getCustomerId();
            try {
                Customer customer = dao.find(id);
                currentCustomerName = customer.getSurname(). concat(", ").concat(customer.getFirstName());
            } catch (CustomerNotFoundException e) {
                e.printStackTrace();
            }
        }
        return currentCustomerName;
    }


    @PostMapping("/addNote")
    public String addNote(@RequestParam("note") String note, HttpServletRequest request) {
        //get the notes from request session
        List<String> notes = (List<String>) request.getSession().getAttribute("NOTES_SESSION");
        //check if notes is present in session or not
        if (notes == null) {
            notes = new ArrayList<>();
            // if notes object is not present in session, set notes in the request session
            request.getSession().setAttribute("NOTES_SESSION", notes);
        }
        notes.add(note);
        request.getSession().setAttribute("NOTES_SESSION", notes);
        return "redirect:/home";
    }

}
