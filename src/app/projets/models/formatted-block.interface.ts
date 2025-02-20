interface Annotation {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

export interface TextSegment {
    plain_text: string;
    annotations: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
    };
    href: string | null;
}

export interface FormattedBlock {
    type: string;
    content: string | TextSegment[] | (string | TextSegment[])[];
}