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

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
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
