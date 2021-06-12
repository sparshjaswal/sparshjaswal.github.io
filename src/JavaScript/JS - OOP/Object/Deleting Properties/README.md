# ****Deleting Properties****

****Delete operator removes a property from an object.****

``
delete Student.age;
delete Student["Full-Name"]
``

1. ``delete`` operators don't operate on value of the property but on property itself.

1. ``delete`` operator only deletes its own properties, not inherited ones.

1. ``delete`` evaluates to true in below cases :-
    1. delete succeeded 
    1. delete had no effect
    1. deleting non-existent property