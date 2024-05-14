export const addQuote = async (data) => {
  try {
    const res = await fetch(
      "https://quote-list.onrender.com/report/addReport/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await res.json();
  } catch (error) {
    return error;
  }
};
export const deleteQuote = async (id) => {
  try {
    const res = await fetch(
      `https://quote-list.onrender.com/report/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getReport = async (sortBy) => {
  try {
    const res = await fetch(
      `https://quote-list.onrender.com/report?sort=${sortBy}`,
      {
        method: "GET",
      }
    );
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const checkAvailability = async (email) => {
  try {
    const res = await fetch(`https://quote-list.onrender.com/email/${email}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
