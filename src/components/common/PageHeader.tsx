interface Props {
  title: string;
  description: string;
}

const PageHeader = ({title,description}: Props) => {
  return (
    <div className="mb-8">

      <h1 className="text-3xl font-bold text-gray-800">
        {title}
      </h1>

      <p className="text-gray-500 mt-2 text-lg">
        {description}
      </p>

    </div>
  );
};

export default PageHeader;