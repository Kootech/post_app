import postModel from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const post = await postModel.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(`error occured ${error}`);
  }
};

export const addPost = async (req, res) => {
  if (!req.body) {
    res.status(400).send(`please add body`);
  }
  const { title, description, clientId } = req.body;
  try {
    const post = await postModel.create({
      title,
      description,
      clientId,
    });
    res.status(201).json(post);
  } catch (error) {
    console.log(`error occorred on adding a post`);
  }
};

export const updatePost = async (req, res) => {
  const findpost = await postModel.findById(req.params.id);

  if (!findpost) {
    res.status(404).json({ message: "post not found" });
  }
  try {
    const post = await postModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(`error occured on update`);
  }
};

export const deletePost = async (req, res) => {
  const findpost = await postModel.findById(req.params.id);

  if (!findpost) {
    res.status(404).json({ message: "post not found" });
  }
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(`error occurred on delete`);
  }
};
