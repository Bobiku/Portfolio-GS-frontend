export interface Annotation {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface TextSegment {
    plain_text: string;
    annotations: Annotation;
    href: string | null;
}

export interface ImageBlock {
    [key: string]: string;
}

export interface FormattedBlock {
    type: string;
    content: FormattedContent;
}

export type FormattedContent = TextSegment[] | ImageBlock;