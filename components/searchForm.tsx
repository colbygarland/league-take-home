import { useState } from 'react';

export const SearchForm = () => {
  const [term, setTerm] = useState<string>('');

  const handleChange = (event: any) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    console.log('run the search now');
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        name="search"
        placeholder='Search "Lorem ipsem dolor"'
        className="bg-gray-200 px-2 py-2 rounded-md border-2 border-transparent focus:bg-white focus:shadow-lg focus:outline-none focus:border-gray-100"
      />
    </form>
  );
};
