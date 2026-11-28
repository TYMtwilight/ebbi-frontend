import type { FileNode } from "@/types/fileNode";

export type FolderNode = {
  type: "folder";
  name: string;
  children: (FolderNode | FileNode)[];
};
