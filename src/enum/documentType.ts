/* eslint-disable no-unused-vars */
export enum DocumentType {
  PDF = 1,
  DOC = 2,
  PPT = 3,
  XLS = 4,
  JPG = 5,
  AUDIO = 6,
  VIDEO = 7,
  EBOOK = 8,
}

export const DocumentTypeArray = [
  { id: DocumentType.PDF, name: "PDF", extension: ".pdf" },
  { id: DocumentType.DOC, name: "DOC", extension: ".doc" },
  { id: DocumentType.PPT, name: "PPT", extension: ".ppt" },
  { id: DocumentType.XLS, name: "XLS", extension: ".xls" },
  { id: DocumentType.JPG, name: "JPG", extension: ".jpg" },
  { id: DocumentType.AUDIO, name: "AUDIO", extension: ".audio/*" },
  { id: DocumentType.VIDEO, name: "VIDEO", extension: ".video/*" },
  { id: DocumentType.EBOOK, name: "EBOOK", extension: "" },
];

export const getDocumentExtension = (value: number): string => {
  return DocumentTypeArray[value - 1]?.extension;
};

export const getDocumentName = (value: number): string => {
  return DocumentTypeArray[value - 1]?.name;
};
