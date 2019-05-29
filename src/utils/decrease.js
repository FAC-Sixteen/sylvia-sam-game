const decrease = (change, setValue) => {
  setValue(oldValue => (oldValue <= 0 ? 0 : oldValue - change));
};

export default decrease;
