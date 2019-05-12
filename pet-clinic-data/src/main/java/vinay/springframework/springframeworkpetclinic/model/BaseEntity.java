package vinay.springframework.springframeworkpetclinic.model;

import java.io.Serializable;

/**
 * @author kanike
 */
public class BaseEntity implements Serializable {

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
