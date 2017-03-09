import Polygons from '../models/polygons';

export const newPolygon = (params) => {
	return new Polygons({
		name: params.name,
    org_id: params.org_id
	})
	.save();
}


export const getPolygonByName = (name) => {
  return new Polygons({ name: name }).fetch();
};

export const getAllPolygonIds = (params) => {
  return Polygons
  .where({org_id: params.org_id})
  .fetchAll()
  // return Polygons.forge().fetchAll()
  .then((polygons) => {
    let polygonIds = polygons.map((poly) => {
      return {
        id: poly.attributes.id,
        label: poly.attributes.name
      }
    })
    return polygonIds;
  })
}