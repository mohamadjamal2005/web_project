interface Props {
  title: string;
  subtitle1: string;
  subtitle2: string;
}

const DashboardHero = ({title,subtitle1,subtitle2}: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-8 text-white shadow-xl">

      <h1 className="text-4xl font-bold mb-3">
        {title}
      </h1>

      <p className="text-blue-100 text-lg max-w-2xl">
        {subtitle1}
      </p>

      <p className="text-blue-100 text-lg max-w-2xl">
        {subtitle2}
      </p>

    </div>
  );
};

export default DashboardHero;