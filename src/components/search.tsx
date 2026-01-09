/**
 * =============================================================================
 * SEARCH COMPONENT
 * =============================================================================
 *
 * A search input box using Ant Design's Input.Search component.
 *
 * CURRENT STATE:
 * --------------
 * This is a basic search component. Right now it just shows the input.
 * You can extend it to:
 * - Filter table data
 * - Search the API
 * - Debounce input (wait before searching)
 *
 * FUTURE IMPROVEMENTS:
 * --------------------
 *   interface SearchProps {
 *     onSearch: (value: string) => void;
 *     placeholder?: string;
 *   }
 *
 *   <Search
 *     onSearch={(value) => setFilter(value)}
 *     placeholder="Search users..."
 *   />
 *
 * =============================================================================
 */

import React from "react";
import { Input } from "antd";

const { Search: AntSearch } = Input;

const Search: React.FC = () => {
  return <AntSearch placeholder="Search..." />;
};

export default Search;
