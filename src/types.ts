export type Args = string[];
export type SolidityFramework = "hardhat" | "foundry";

type BaseOptions = {
  project: string | null;
  install: boolean;
  dev: boolean;
  solidityFramework: SolidityFramework | "none" | null;
};

export type RawOptions = BaseOptions & {
  help: boolean;
};

export type Options = {
  [Prop in keyof BaseOptions]: NonNullable<BaseOptions[Prop]>;
} & {
  solidityFramework: SolidityFramework | null;
};

export type TemplateDescriptor = {
  path: string;
  fileUrl: string;
  relativePath: string;
  source: string;
};

export type SolidityFrameworkChoices = (SolidityFramework | { value: any; name: string })[];
