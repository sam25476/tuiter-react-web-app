import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-2">
        <div className="col">
            <i className="bi bi-chat"></i>
            {tuit.replies}
        </div>
        <div className="col">
            <i className="bi bi-arrow-repeat"></i>
            {tuit.retuits}
        </div>
            <div>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(
                    updateTuitThunk({
                                        ...tuit,
                                        likes: tuit.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
        <div className="col">
            <i className="bi bi-share me-2"></i>
        </div>
    </div>);

}
export default TuitStats