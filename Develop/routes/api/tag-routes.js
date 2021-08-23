const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const productData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const productData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: { id: req.params.id } })
        res.status(200).json(updateTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete one tag
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204).json(productData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
