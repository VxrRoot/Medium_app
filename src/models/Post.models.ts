interface IPost {
    _id: string;
    _createdAt: string;
    title: string;
    slug: {
        current: string
    };
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    body: [object];
}

export type PostDataModel = IPost

export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    },
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string
}