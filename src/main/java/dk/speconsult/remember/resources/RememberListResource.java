package dk.speconsult.remember.resources;

import dk.speconsult.remember.model.RememberList;
import dk.speconsult.remember.service.MorphiaService;
import org.mongodb.morphia.query.Query;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.ArrayList;
import java.util.List;

@Path("/RememberList")
public class RememberListResource {

    @Inject
    MorphiaService mongo;

    @GET
    public List<RememberList> query() throws Exception {

        List<RememberList> queryList = new ArrayList<RememberList>();
        Query<RememberList> rememberLists = mongo.getDatastore().find(RememberList.class);
        Iterable<RememberList> fetch = rememberLists.fetch();
        for (RememberList rememberList : fetch) {
            queryList.add(rememberList);
        }

        return queryList;
    }

    @POST
    public RememberList createRememberList(RememberList rememberList) throws Exception {

        mongo.getDatastore().save(rememberList);
        return rememberList;

    }



}
