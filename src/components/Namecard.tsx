export interface INameCardProps {
  name: string;
}

export default (props: INameCardProps) => {
  return <div>{props.name}</div>;
};

// Don't use destructing assignment in Solid.