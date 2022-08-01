interface Props {
  time: string;
  memory: string;
}
const TimeAndMemory: React.FC<Props> = ({ time, memory }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row space-x-12">
        <p className="">
          <span className="">Time Limit:</span> {time}
        </p>

        <p className="">
          <span className="">Memory Limit:</span> {memory}
        </p>
      </div>
    </div>
  );
};

export default TimeAndMemory;
