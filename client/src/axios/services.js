import instance from ".";

export const login = (data) => {
  return instance.post("/auth/login-jwt", data);
};

export const register = (data) => {
  return instance.post("/auth/register-jwt", data);
};

export const getAllFolders = (bearerToken) => {
  return instance.get("/noteFolder/", {
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${bearerToken}`,
    },
  });
};

export const getNotesInFolders = (bearerToken, { idFolder, password}) => {
  return instance.get(`/note/getNoteInFolder/${idFolder}`, {
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${bearerToken}`,
    },
    params: {
      password,
    },
  });
};

export const getNote = (bearerToken, { idNote, password}) => {
  return instance.get(`/note/${idNote}`, {
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${bearerToken}`,
    },
    params: {
      password,
    },
  });
};

export const createFolder = (bearerToken, { title, password }) => {
  return instance.post(
    `/noteFolder`,
    {
      title,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export const updateFolder = (bearerToken, { idFolder,title }) => {
  return instance.put(
    `/noteFolder/${idFolder}`,
    {
      title,
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};


export const createNote = (bearerToken, { folder, password }) => {
  return instance.post(
    `/note`,
    { folder, title: "New note", content: "Write something", password },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export const saveNote = (bearerToken, { content, idNote, password, title }) => {
  return instance.put(
    `/note/${idNote}`,
    {
      content,
      password,
      title,
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export const deleteNote = (bearerToken, { idNote }) => {
  return instance.delete(`/note/${idNote}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });
};

export const deleteFolder = (bearerToken, { idFolder }) => {
  return instance.delete(`/noteFolder/${idFolder}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });
};
