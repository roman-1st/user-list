import {Link} from "react-router-dom";
import React, {FC, memo} from "react";
import {Post} from "../../../shared/types/Post";
import clsx from "clsx";

interface PostsListItemProps {
    index: number;
    style: React.CSSProperties;
    data: Post[];
}

export const PostsListItem: FC<PostsListItemProps> = memo(({ index, style, data }) => (
    <div
        key={index}
        className={clsx("d-flex align-items-center justify-content-between p-1",
            index % 2 && "ListItemEven" )
        }
        style={style}
    >
        <p className="mb-0" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
            Id: {data[index].id}. <b>Title: {data[index].title}.</b>  Text: {data[index].body}
        </p>
        <Link className="ms-2" to={`/post/${data[index].id}`}>Перейти</Link>
    </div>
))