interface Image {
    id: number;
    filename: string;
    label: string;
    height: number;
    width: number;
    dimension: number;
    size: number
    max_RGB: number;
    min_RGB: number;
    red?: number | null;
    green?: number | null;
    blue?: number | null;
};

export default Image;
