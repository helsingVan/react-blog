import PhotoWeibo from '../views/photo-weibo';
import NormalWeibo from '../views/normal-weibo';
import Blog from '../views/blog';
import Works from '../views/works';

export default [
    { id: 'tab-1', name: '图片说', path: '/tab-1', component: PhotoWeibo },
    { id: 'tab-2', name: '心情', path: '/tab-2', component: NormalWeibo },
    { id: 'tab-3', name: '博客', path: '/tab-3', component: Blog},
    { id: 'tab-4', name: '作品集', path: '/tab-4', component: Works },
];