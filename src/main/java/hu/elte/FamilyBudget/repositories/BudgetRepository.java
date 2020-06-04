package hu.elte.FamilyBudget.repositories;

import hu.elte.FamilyBudget.entities.Budget;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepository extends CrudRepository<Budget, Integer> {
//    public Iterable<Budget> findAllByUser(User user);
    
//    @Query("SELECT new hu.elte.FamilyBudget.dtos.BudgetListDTO(i.id, i.title, i.description, i.place, i.status, i.created_at, i.updated_at, count(m.id)) FROM Budget i LEFT JOIN i.messages m WHERE i.user = ?1 GROUP BY i")
//    public Iterable<Budget> findAllByUserWithMessageCount(User user);
//    
//    @Query("SELECT new hu.elte.FamilyBudget.dtos.BudgetListDTO(i.id, i.title, i.description, i.place, i.status, i.created_at, i.updated_at, count(m.id)) FROM Budget i LEFT JOIN i.messages m GROUP BY i")
//    List<BudgetListDTO> findAllBudgetWithMessageCount();
}
