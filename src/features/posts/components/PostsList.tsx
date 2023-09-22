import React, { FC, memo, useState} from 'react';
import {postsAPI} from "../redux/PostsService";
import { FixedSizeList as List } from 'react-window';
import {PostsListItem} from "./PostsListItem";

export const PostsList: FC = memo(() => {
    const {data, isLoading} = postsAPI.useGetAllPostsQuery("")
    const [initialScrollOffset] = useState<number>(Number(localStorage.getItem('scrollOffset')))

    const handleScroll = ({ scrollOffset }: any) => {
        localStorage.setItem('scrollOffset', scrollOffset);
    };

    if(isLoading) {
        return (
            <div className="w-100 pt-5 d-flex align-items-center justify-content-center">
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </div>
        )
    }

    return (
        <div className='d-flex align-items-center flex-column gap-1 p-5'>
            <List
                className="border"
                height={250}
                itemCount={data.length}
                itemSize={35}
                width={1000}
                itemData={data}
                onScroll={handleScroll}
                initialScrollOffset={initialScrollOffset}
            >
                {PostsListItem}
            </List>
        </div>
    );
});