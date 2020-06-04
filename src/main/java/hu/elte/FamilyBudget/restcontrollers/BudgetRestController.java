package hu.elte.FamilyBudget.restcontrollers;

import hu.elte.FamilyBudget.entities.Budget;
import hu.elte.FamilyBudget.repositories.BudgetRepository;

import java.security.Principal;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/budgets")
public class BudgetRestController {
    
    @Autowired
    private BudgetRepository budgetRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Budget>> getAll(Principal principal) {
        return ResponseEntity.ok(budgetRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Budget> get(@PathVariable Integer id) {
        Optional<Budget> budget = budgetRepository.findById(id);
        if (budget.isPresent()) {
            return ResponseEntity.ok(budget.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Budget> post(@RequestBody Budget budget, Principal principal) {
        Budget savedBudget = budgetRepository.save(budget);
        return ResponseEntity.ok(savedBudget);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Budget> update
            (@PathVariable Integer id,
             @RequestBody Budget budget) {
        Optional<Budget> oBudget = budgetRepository.findById(id);
        if (oBudget.isPresent()) {
            budget.setId(id);
            return ResponseEntity.ok(budgetRepository.save(budget));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @DeleteMapping("/{id}")
    public ResponseEntity<Budget> delete
            (@PathVariable Integer id) {
        Optional<Budget> oBudget = budgetRepository.findById(id);
        if (oBudget.isPresent()) {
            budgetRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
     
}
