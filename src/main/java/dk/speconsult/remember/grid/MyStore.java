package dk.speconsult.remember.grid;

import com.hazelcast.core.MapStore;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * User: svx
 * Date: 10-12-13
 * Time: 18:41
 * To change this template use File | Settings | File Templates.
 */
public class MyStore implements MapStore {

    @Override
    public void store(Object o, Object o2) {
        System.out.println("MyStore.store");
    }

    @Override
    public void storeAll(Map map) {
        System.out.println("MyStore.storeAll");
    }

    @Override
    public void delete(Object o) {
        System.out.println("MyStore.delete");
    }

    @Override
    public void deleteAll(Collection collection) {
        System.out.println("MyStore.deleteAll");
    }

    @Override
    public Object load(Object o) {
        System.out.println("MyStore.load");
        return null;
    }

    @Override
    public Map loadAll(Collection collection) {
        System.out.println("MyStore.loadAll");
        return null;
    }

    @Override
    public Set loadAllKeys() {
        System.out.println("MyStore.loadAllKeys");
        return null;
    }
}
