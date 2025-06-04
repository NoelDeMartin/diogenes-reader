import { FieldType } from 'soukai';
import { defineSolidModelSchema } from 'soukai-solid';

export default defineSolidModelSchema({
    rdfContext: 'https://schema.org',
    fields: {
        title: {
            type: FieldType.String,
            required: true,
            rdfProperty: 'schema:name',
        },
        description: FieldType.String,
        body: {
            type: FieldType.String,
            rdfProperty: 'schema:articleBody',
        },
        externalUrl: {
            type: FieldType.Key,
            rdfProperty: 'schema:sameAs',
        },
    },
});
