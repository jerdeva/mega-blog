'use client'

import { useEffect, useState } from "react";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/components/app-link";

type ArticlePreviewProps = { name: string, text: string }
const getLikeKey = (articleName:string)=>`arg13_blog_1_like${articleName}`

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likeKey = getLikeKey(name);
        const likeValue = localStorage.getItem(likeKey);
        setLiked(likeValue === 'like')
    },[name])


    const handleLikeClick = () => {
        const likeKey = getLikeKey(name);
        if (liked) {
            localStorage.removeItem(likeKey);
            setLiked(false)
        } else {
            localStorage.setItem(likeKey, 'like');
            setLiked(true);
        }
    }
    
  return (
    <>
    <AppLink href={ROUTING.article(name)}>{text}</AppLink>
    <button onClick={handleLikeClick} type="button" >{liked ? 'wow': 'like'}</button></>
  )
}