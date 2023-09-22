import React, {FC, memo} from 'react';
import {postsAPI} from "../../shared/redux/PostsService";
import {useNavigate, useParams} from "react-router-dom";
import {Loader} from "../../shared/Loader";

export const Post: FC = memo(() => {
    const params = useParams()
    const navigate = useNavigate()
    const {data, isLoading} = postsAPI.useGetOnePostQuery(Number(params.id))

    if(isLoading || !data) {
        return <Loader />
    }

    return (
        <div className="d-flex justify-content-center pt-5">
            <div className="card  w-50">
                <div className="card-header d-flex align-items-center justify-content-between ">
                    <h5 className="card-title mb-0"> Uid: {data.id} </h5>
                    <div className="card-toolbar">
                        <button onClick={() => navigate(-1)} type="button" className="btn btn-sm btn-primary">
                            Назад
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </div>
            </div>
        </div>
    );
});