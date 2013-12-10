package dk.speconsult.remember.grid;

import com.hazelcast.client.HazelcastClient;
import com.hazelcast.client.config.ClientConfig;
import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IMap;

import javax.enterprise.context.ApplicationScoped;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: svx
 * Date: 10-12-13
 * Time: 16:21
 * To change this template use File | Settings | File Templates.
 */
@ApplicationScoped
public class HazelcastService {

    public static final String REMEMBERLIST_MAP = "rememberlistMap";

    private HazelcastInstance instance;

    public IMap getRememberListMap() {
        if(instance == null) {
            instance = createHazelcast();
        }

        IMap map = instance.getMap(REMEMBERLIST_MAP);
        return map;
    }


    private static HazelcastInstance createHazelcast() {
        ClientConfig clientConfig = new ClientConfig();
        clientConfig.addAddress("127.0.0.1:5701");
        HazelcastInstance client = HazelcastClient.newHazelcastClient(clientConfig);
        return client;
    }


}
