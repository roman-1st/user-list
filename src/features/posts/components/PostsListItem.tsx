import {Link} from "react-router-dom";
import React, {FC, memo} from "react";
import {Posts} from "../types/Posts";
import clsx from "clsx";

interface PostsListItemProps {
    index: number;
    style: React.CSSProperties;
    data: Posts[];
}

export const PostsListItem: FC<PostsListItemProps> = memo(({ index, style, data }) => (
    <div
        className={clsx("d-flex align-items-center justify-content-between",
            index % 2 && "ListItemEven" )
        }
        style={style}
    >
        <p className="mb-0" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
            Id: {data[index].id}. Text: {data[index].body}
        </p>
        <Link className="ms-2" to={`/post/${data[index].id}`}>Перейти</Link>
    </div>
))