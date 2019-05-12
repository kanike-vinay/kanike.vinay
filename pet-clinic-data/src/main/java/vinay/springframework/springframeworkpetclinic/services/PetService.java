package vinay.springframework.springframeworkpetclinic.services;

import vinay.springframework.springframeworkpetclinic.model.Pet;

import java.util.Set;

public interface PetService {

    Pet findById(Long id);

    Pet save(Pet pet);

    Set<Pet> findAll();
}
