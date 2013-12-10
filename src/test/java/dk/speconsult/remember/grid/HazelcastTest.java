package dk.speconsult.remember.grid;

import com.hazelcast.client.HazelcastClient;
import com.hazelcast.client.config.ClientConfig;
import com.hazelcast.config.Config;
import com.hazelcast.core.Hazelcast;
import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IMap;
import dk.speconsult.remember.model.RememberList;
import dk.speconsult.remember.model.Status;
import junit.framework.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * Created with IntelliJ IDEA.
 * User: svx
 * Date: 10-12-13
 * Time: 16:20
 * To change this template use File | Settings | File Templates.
 */
public class HazelcastTest {


    @BeforeClass
    public static void startHazecastCluster() {
        Config cfg = new Config();
        Hazelcast.newHazelcastInstance(cfg);
        Hazelcast.newHazelcastInstance(cfg);
        Hazelcast.newHazelcastInstance(cfg);
    }

    private IMap getMap() {
        HazelcastService hService = new HazelcastService();
        IMap rememberListMap = hService.getRememberListMap();
        return rememberListMap;
    }

    //@Test
    public void testHazelcastIntsance() {
        IMap map = getMap();
        Assert.assertNotNull(map);
    }

    @Test
    public void testAddRememberList() {

        RememberList rememberList;
        IMap map = getMap();
        map.clear();
        for(int i = 0; i < 1000; i++) {

            rememberList = new RememberList();
            rememberList.setDescription("test1" + 1);
            String id = "ABCDEFG1234" + i;
            rememberList.setId(id);
            rememberList.setName("Test1 Name" + 1);
            rememberList.setStatus(Status.ACTIVE);

            map.putIfAbsent(id, rememberList);

            /*
            if(i % 1000 == 0) {
                System.out.println("count = " + i);
            }
            */
        }

        Assert.assertEquals(1000, map.size());

        System.out.println("map.size() 1 = " + map.size());

    }


    @Test
    public void testFirstNodeInCluster() {

        ClientConfig clientConfig = new ClientConfig();
        clientConfig.addAddress("127.0.0.1:5701");
        HazelcastInstance client = HazelcastClient.newHazelcastClient(clientConfig);

        IMap map = client.getMap(HazelcastService.REMEMBERLIST_MAP);

        Assert.assertEquals(1000, map.size());



    }

    @Test
    public void testSecondNodeInCluster() {

        ClientConfig clientConfig = new ClientConfig();
        clientConfig.addAddress("127.0.0.1:5702");
        HazelcastInstance client = HazelcastClient.newHazelcastClient(clientConfig);

        IMap map = client.getMap(HazelcastService.REMEMBERLIST_MAP);

        Assert.assertEquals(1000, map.size());



    }

    @Test
    public void testThirdNodeInCluster() {

        ClientConfig clientConfig = new ClientConfig();
        clientConfig.addAddress("127.0.0.1:5703");
        HazelcastInstance client = HazelcastClient.newHazelcastClient(clientConfig);

        IMap map = client.getMap(HazelcastService.REMEMBERLIST_MAP);

        Assert.assertEquals(1000, map.size());

        /*
        for (Object o : map.keySet()) {
            System.out.println("o = " + o);
        }
        */

    }

}
