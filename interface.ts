export interface Hero {
    id: number;
    title: string;
    text: string;
    text1?: string;
    text2?: string;
    image: any;
    image2?: any;
}

export interface Progress {
    id: number;
    icon: any;
    title: string;
    text: string;
    text2: string;
}


export interface Job {
    id: number;
    logo: any;
    about: string;
    role: string;
    location: string;
    industry: string;
    equity: string;
    stipend: string;
    deadline: string;
    type: string;
}

export interface BlogData {
    id: number;
    title: string;
    text: string;
    image: any;
    image2: any;
}