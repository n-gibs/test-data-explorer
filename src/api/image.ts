import Image from '../types/Image';
import imageData from '../data/image_data.json';

export function getImagesAndMetadata(): Image[] {

    return <Image[]>(imageData);
}

export function getImageById(id:number): Image {
    const result = imageData.filter(img => img.id === id);

    if (result.length < 1) {
        throw Error(`no images found with id ${id}`);
    }

    return encodeImage(result[0])
}

export function getImagesByLabel(label: string): Image[] {
    const result = imageData.filter(d => d.label === label);

    return <Image[]>(result);
}

export function getTotalForFilter(column:string, filter:string|number): number{

    const result = imageData.filter(d => {

        type ObjectKey = keyof typeof d;
        const col = column as ObjectKey;

        return d[col] === filter;
    });

    return result.length;
}


function encodeImage(imgJson: Image): Image {
    let {id, filename, label, height, width, dimension, size, max_RGB, min_RGB, red, green, blue} = imgJson

    return {
        id,
        filename,
        label,
        height,
        width,
        dimension,
        size,
        max_RGB,
        min_RGB,
        red,
        green,
        blue
    }
}