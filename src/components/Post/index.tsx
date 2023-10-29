import { ReactNode } from 'react';

import styles from './Post.module.css';
import PostComments from '../PostComments';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post} data-testid="post-component">
        <img  height={112} width={112} className={styles['post-image']} src={imageUrl} alt="Batmovel" />
        <p data-testid="post-text" className={styles['post-text']}> {children} </p>
        <div data-testid="post-comments">
            <PostComments />
        </div>
    </div>
);

export default Post;
