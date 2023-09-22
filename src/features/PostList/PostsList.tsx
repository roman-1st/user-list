import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {postsAPI} from "../../shared/redux/PostsService";
import { FixedSizeList as List } from 'react-window';
import {PostsListItem} from "./PostListItem/PostsListItem";
import {Loader} from "../../shared/Loader";
import {Post} from "../../shared/types/Post";

export const PostsList: FC = memo(() => {
    const listRef = useRef<any>()
    const [paginationCount, setPaginationCount] = useState<number>(
        Number(localStorage.getItem('paginationCount')) || 10
    );
    const [initialScrollOffset] = useState<number>(Number(localStorage.getItem('scrollOffset')))
    const {data, isLoading} = postsAPI.useGetAllPostsQuery(paginationCount)

    const onScroll = ({ scrollOffset }: any) => {
        localStorage.setItem('scrollOffset', scrollOffset);
        if( listRef.current?.state?.scrollOffset / paginationCount > (paginationCount / 3) ) {
            setPaginationCount( prev => {
                localStorage.setItem('paginationCount', String(prev + 10));
                return prev + 10
            })
        }
    };

    if(isLoading || !data) {
        return <Loader />
    }

    return (
        <div className='d-flex align-items-center flex-column gap-1 p-5'>
            <List
                ref={listRef}
                className="border"
                height={250}
                itemCount={data.length}
                itemSize={35}
                width={1000}
                itemData={data}
                onScroll={onScroll}
                initialScrollOffset={initialScrollOffset}
            >
                {PostsListItem}
            </List>
        </div>
    );
});