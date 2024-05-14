export const addQuote = async (data) => {
  try {
    const res = await fetch("http://localhost:8080/report/addReport/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
export const deleteQuote = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/report/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getReport = async (sortBy) => {
  try {
    const res = await fetch(`http://localhost:8080/report?sort=${sortBy}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const checkAvailability = async (email) => {
  try {
    const res = await fetch(`http://localhost:8080/report/email/${email}`, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};
