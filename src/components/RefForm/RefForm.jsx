const RefForm = () => {
  const handleSubmit = (e) => {
    console.log("handle submit ", e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" id="" />
        <br />
        <input type="email" name="email" placeholder="email" id="" />
        <br />
        <input type="text" name="phone" placeholder="phone" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
