import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useCategories, useCreateCategory, useDeleteCategory, useUpdateCategory } from "@/features/categories/api";
import { CategoryTable } from "@/features/categories/components";
import { ViewPort } from "@/features/viewPort/components";
import { useState } from "react";
import type { CategoryResponse, CreateCategoryRequest } from "@/types";
import ModalForm from "@/features/categories/components/modal-form";
import AddCategoryButton from '../features/categories/components/addCategoryButton'


export const Route = createFileRoute("/category")({
    component: Category,
});

function Category() {
    const { data: categories, isLoading, error } = useCategories();
    const createCategory = useCreateCategory();
    const deleteCategory = useDeleteCategory();
    const [editingCategory, setEditingCategory] = useState<CategoryResponse | null>(null);
    const [openModal, setOpenModal] = useState(false);

    const handleEdit = (category: CategoryResponse) => {
        setEditingCategory(category);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setEditingCategory(null);
        setOpenModal(false);
    }

    const handleOpenModalCategory = () => {
        setOpenModal(true);

    }



    if (error) {
        return (
            <ViewPort>
                <ErrorMessage message={error.message} />
            </ViewPort>
        );
    }

    return (
        <ViewPort>
            <PageHeader
                title="Category Management"
                createButtonText="Create Category"
            />
            <div className="mb-5">
                <Search />
            </div>
            <CategoryTable
                categories={categories}
                loading={isLoading}
                onDelete={(id) => deleteCategory.mutate(id)}
                onEdit={handleEdit}

            />

            {openModal && (
                <ModalForm
                    openModal={openModal}
                    handleClose={handleCloseModal}
                    onClickCreate={(data: CreateCategoryRequest) => createCategory.mutate(data)}

                />
            )}

            <AddCategoryButton handleAddCategory={handleOpenModalCategory} />


        </ViewPort>
    );
}


