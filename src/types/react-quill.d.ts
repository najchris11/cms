declare module 'react-quill' {
    import * as React from 'react';
  
    interface QuillOptions {
      theme?: string;
      modules?: any;
      formats?: string[];
      readOnly?: boolean;
      placeholder?: string;
      bounds?: string | HTMLElement;
      scrollingContainer?: string | HTMLElement;
      onChange?: (content: string, delta: any, source: string, editor: any) => void;
      onChangeSelection?: (range: any, source: string, editor: any) => void;
      onFocus?: (range: any, source: string, editor: any) => void;
      onBlur?: (previousRange: any, source: string, editor: any) => void;
    }
  
    interface ReactQuillProps extends QuillOptions {
      value?: string;
      defaultValue?: string;
      onChange?: (content: string, delta: any, source: string, editor: any) => void;
      onChangeSelection?: (range: any, source: string, editor: any) => void;
      onFocus?: (range: any, source: string, editor: any) => void;
      onBlur?: (previousRange: any, source: string, editor: any) => void;
      children?: React.ReactNode;
    }
  
    class Quill {
      constructor(element: HTMLElement, options: QuillOptions);
      clipboard: {
        dangerouslyPasteHTML(html: string): void;
      };
    }
  
    const ReactQuill: React.ComponentType<ReactQuillProps>;
    export = ReactQuill;
  }